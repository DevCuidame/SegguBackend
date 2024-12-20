INSERT INTO companies (name, phone_number_asist, address)
VALUES 
('Tech Innovators Inc.', '123-456-7890', '123 Silicon Valley, CA'),
('Global Solutions Ltd.', '234-567-8901', '456 High Street, NY'),
('Future Horizons Co.', '345-678-9012', '789 Maple Ave, TX'),
('DataStream Corp.', '456-789-0123', '101 Tech Park, WA'),
('NextGen Enterprises', '567-890-1234', '202 Business Center, FL');

INSERT INTO users (username, name, lastname, citizenship_card, company, role, locate, birth_date, user_type, email, password, token, created_at, updated_at)
VALUES 
('jdoe', 'John', 'Doe', '123456789', 'Tech Innovators Inc.', 'Developer', 'New York', '1985-06-15', 'Admin', 'jdoe@example.com', 'hashedpassword123', NULL, '2024-01-01 10:00:00', '2024-01-01 10:00:00'),
('asmith', 'Alice', 'Smith', '987654321', 'Global Solutions Ltd.', 'Manager', 'California', '1990-03-22', 'User', 'asmith@example.com', 'hashedpassword456', NULL, '2024-01-02 12:30:00', '2024-01-02 12:30:00'),
('bwayne', 'Bruce', 'Wayne', '456789123', 'Future Horizons Co.', 'CEO', 'Gotham City', '1975-02-19', 'Admin', 'bwayne@example.com', 'hashedpassword789', NULL, '2024-01-03 14:45:00', '2024-01-03 14:45:00'),
('pwalker', 'Peter', 'Walker', '654321987', 'DataStream Corp.', 'Analyst', 'Texas', '1995-11-12', 'User', 'pwalker@example.com', 'hashedpassword101', NULL, '2024-01-04 09:00:00', '2024-01-04 09:00:00'),
('lcarter', 'Linda', 'Carter', '321987654', 'NextGen Enterprises', 'Consultant', 'Florida', '1988-08-08', 'Guest', 'lcarter@example.com', 'hashedpassword202', NULL, '2024-01-05 15:00:00', '2024-01-05 15:00:00');

INSERT INTO reviews (user_id, description, stars, created_at)
VALUES 
(1, 'Excelente servicio, la atención fue rápida y eficiente.', 5, '2024-01-10 10:00:00'),
(2, 'La experiencia fue buena, aunque podría mejorar la calidad.', 4, '2024-01-11 12:00:00'),
(3, 'El producto no cumplió con las expectativas esperadas.', 2, '2024-01-12 15:30:00'),
(4, 'Muy satisfecho con el servicio recibido.', 5, '2024-01-13 09:45:00'),
(5, 'Hubo algunos inconvenientes, pero el personal fue amable.', 3, '2024-01-14 14:15:00');

INSERT INTO actives 
(product, plate, brand, line, model, cylinder_capacity, color, service, vehicle_class, cabin_type, fuel, capacity, engine_number, vin, serial_number, chassis_number, mobility_restriction, armor_level, horsepower, import_declaration, import_date, doors, registration_date)
VALUES
('Vehículo Comercial', 'ABC-123', 'Toyota', 'Hilux', '2021', '2500 cc', 'Blanco', 'Carga', 'Camioneta', 'Doble cabina', 'Diésel', '5 toneladas', 'EN12345', 'VIN12345', 'SN12345', 'CH12345', 'No', 'Nivel 2', '150 HP', 'ID123456', '2022-05-12', '4', '2021-08-10'),
('Vehículo Particular', 'XYZ-456', 'Chevrolet', 'Sail', '2018', '1400 cc', 'Rojo', 'Particular', 'Automóvil', 'Sedán', 'Gasolina', '5 pasajeros', 'EN54321', 'VIN54321', 'SN54321', 'CH54321', 'No', NULL, '100 HP', NULL, NULL, '4', '2018-03-15'),
('Motocicleta', 'MOT-789', 'Honda', 'CBR', '2020', '650 cc', 'Negro', 'Personal', 'Motocicleta', NULL, 'Gasolina', '2 pasajeros', 'EN78945', 'VIN78945', 'SN78945', NULL, 'No', NULL, '85 HP', NULL, NULL, NULL, '2020-09-18'),
('Vehículo Eléctrico', 'ELE-321', 'Tesla', 'Model 3', '2022', NULL, 'Gris', 'Particular', 'Automóvil', 'Hatchback', 'Eléctrico', '5 pasajeros', NULL, 'VIN98765', NULL, 'CH98765', 'No', NULL, NULL, 'ID987654', '2023-01-20', '4', '2022-11-05'),
('Camión', 'CAM-654', 'Mercedes-Benz', 'Actros', '2019', '12000 cc', 'Azul', 'Carga', 'Camión', 'Cabina Simple', 'Diésel', '20 toneladas', 'EN45678', 'VIN45678', 'SN45678', 'CH45678', 'No', NULL, '300 HP', 'ID456789', '2020-06-30', '2', '2019-05-14');

INSERT INTO beneficiaries (img_profile_path, name, citizenship_card, role, email, birth_date)
VALUES
('/images/profiles/johndoe.jpg', 'John Doe', '123456789', 'Estudiante', 'johndoe@example.com', '1995-06-15'),
('/images/profiles/janedoe.jpg', 'Jane Doe', '987654321', 'Profesora', 'janedoe@example.com', '1985-12-05'),
('/images/profiles/robertsmith.jpg', 'Robert Smith', '456789123', 'Administrador', 'robertsmith@example.com', '1990-03-20'),
('/images/profiles/alicestone.jpg', 'Alice Stone', '789123456', 'Consultora', 'alicestone@example.com', '1988-08-10'),
('/images/profiles/michaellong.jpg', 'Michael Long', '321654987', 'Ingeniero', 'michaellong@example.com', '1993-01-25');

INSERT INTO insurances 
(user_id, beneficiary_id, active_id, product, type, renewal_date, description, coverage, asist, category, policy_number, created_at, company_id)
VALUES
(1, 1, NULL, 'Seguro de Vida', 'Personal', '2025-01-01', 
 'Seguro que cubre fallecimiento y discapacidades totales.', 
 'Cobertura mundial para emergencias médicas y accidentes.', 
 'Línea de asistencia 24/7.', 
 ARRAY['Vida', 'Emergencias'], 
 'POL12345678', '2024-01-15 10:00:00', 1),

(2, NULL, 1, 'Seguro de Auto', 'Vehículo', '2025-02-01', 
 'Seguro de auto para choques y robos.', 
 'Cobertura de responsabilidad civil y daños propios.', 
 'Asistencia en carretera y reparaciones de emergencia.', 
 ARRAY['Auto', 'Choques', 'Reparación'], 
 'POL87654321', '2024-01-20 11:00:00', 2),

(3, NULL, 3, 'Seguro de Hogar', 'Propiedad', '2025-03-01', 
 'Protección contra incendios, robos y desastres naturales.', 
 'Cobertura completa de contenido y estructura.', 
 NULL, 
 ARRAY['Hogar', 'Desastres'], 
 'POL13572468', '2024-01-25 09:30:00', 3),

(4, 2, NULL, 'Seguro Médico', 'Salud', '2025-04-01', 
 'Seguro para consultas médicas, hospitalizaciones y cirugías.', 
 'Cobertura nacional para tratamientos médicos.', 
 'Red de hospitales afiliados y soporte remoto.', 
 ARRAY['Salud', 'Hospitalización'], 
 'POL24681357', '2024-02-01 14:20:00', 4),

(5, NULL, 2, 'Seguro de Responsabilidad Civil', 'General', '2025-05-01', 
 'Protección ante demandas y daños a terceros.', 
 'Cobertura internacional para responsabilidades legales.', 
 'Asesoría legal disponible las 24 horas.', 
 ARRAY['Legal', 'Daños a Terceros'], 
 'POL36925814', '2024-02-15 16:00:00', 5);