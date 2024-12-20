-- Crear tabla de empresas
CREATE TABLE companies (
    company_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    address VARCHAR(255) NOT NULL
);

-- Crear tabla de usuarios
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(100) NOT NULL,
    national_id VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(75) NOT NULL UNIQUE,
    birth_date DATE NOT NULL,
    user_type VARCHAR(50) NOT NULL CHECK (user_type IN ('admin', 'agent', 'insured')),
    company_id INTEGER NOT NULL REFERENCES companies(company_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de seguros
CREATE TABLE insurances (
    insurance_id SERIAL PRIMARY KEY,
    product VARCHAR(100) NOT NULL,
    renewal_date DATE NOT NULL,
    type VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    categories TEXT NOT NULL,
    company VARCHAR(100) NOT NULL,
    policy_number VARCHAR(25) NOT NULL
);

-- Crear tabla de reseñas
CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    description VARCHAR(255) NOT NULL,
    stars INTEGER NOT NULL CHECK (stars >= 1 AND stars <= 5)
);

-- Relacionar usuarios con seguros
CREATE TABLE user_insurances (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    insurance_id INTEGER NOT NULL REFERENCES insurances(insurance_id)
);

-- Tabla para manejar imágenes
CREATE TABLE images (
    image_id SERIAL PRIMARY KEY,
    public_name VARCHAR(255) NOT NULL,
    private_name VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para manejar documentos
CREATE TABLE documents (
    document_id SERIAL PRIMARY KEY,
    public_name VARCHAR(255) NOT NULL,
    private_name VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Agregar trigger para actualizar la columna updated_at en usuarios
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = CURRENT_TIMESTAMP;
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
