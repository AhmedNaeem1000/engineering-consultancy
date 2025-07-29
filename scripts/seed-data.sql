-- إدراج البيانات الأولية
-- إدراج المستخدمين الأساسيين
INSERT INTO users (id, email, password_hash, full_name, phone, role, is_verified) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'admin@alwaha-engineering.com', '$2b$10$example_hash', 'المدير العام', '+966501234567', 'admin', true),
('550e8400-e29b-41d4-a716-446655440001', 'ahmed.saeed@alwaha-engineering.com', '$2b$10$example_hash', 'المهندس أحمد السعيد', '+966501234568', 'engineer', true),
('550e8400-e29b-41d4-a716-446655440002', 'fatima.naimi@alwaha-engineering.com', '$2b$10$example_hash', 'الدكتورة فاطمة النعيمي', '+966501234569', 'engineer', true),
('550e8400-e29b-41d4-a716-446655440003', 'khalid.zaabi@alwaha-engineering.com', '$2b$10$example_hash', 'المهندس خالد الزعابي', '+966501234570', 'engineer', true),
('550e8400-e29b-41d4-a716-446655440004', 'nora.qahtani@alwaha-engineering.com', '$2b$10$example_hash', 'المهندسة نورا القحطاني', '+966501234571', 'engineer', true);

-- إدراج الخدمات
INSERT INTO services (name, description, category, price, duration, features) VALUES
('استشارة عامة', 'استشارة أولية لمناقشة مشروعك ومتطلباتك', 'consultation', 0, 30, ARRAY['استشارة مجانية', 'تقييم أولي', 'توجيه عام']),
('استشارة معمارية', 'استشارة متخصصة في التصميم المعماري', 'architectural', 500, 60, ARRAY['تحليل الموقع', 'مفهوم التصميم', 'توصيات معمارية']),
('استشارة إنشائية', 'استشارة في الهندسة الإنشائية والتصميم', 'structural', 600, 60, ARRAY['تحليل إنشائي', 'اختيار المواد', 'حلول تقنية']),
('استشارة إدارة مشاريع', 'استشارة في تخطيط وإدارة المشاريع', 'project-management', 400, 45, ARRAY['تخطيط المشروع', 'إدارة الموارد', 'متابعة التنفيذ']);

-- إدراج مشاريع نموذجية
INSERT INTO projects (title, description, category, client_id, assigned_engineer_id, status, budget, start_date, end_date, progress, location, area) VALUES
('مجمع الرياض التجاري', 'مجمع تجاري حديث بمساحة 50,000 متر مربع', 'commercial', '550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440001', 'execution', 15000000, '2023-06-01', '2024-12-31', 75, 'الرياض', 50000),
('فيلا العائلة الملكية', 'فيلا فاخرة بتصميم معماري استثنائي', 'residential', '550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440002', 'completed', 3500000, '2023-01-15', '2023-11-30', 100, 'الرياض', 2500),
('مستشفى الملك فهد', 'مستشفى متطور بأحدث المعايير الطبية', 'medical', '550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440003', 'design', 25000000, '2024-03-01', '2025-08-31', 30, 'جدة', 25000);

-- إدراج مقالات المدونة
INSERT INTO blog_posts (title, slug, excerpt, content, category, author_id, status, published_at, views, likes, tags) VALUES
('مستقبل التصميم المعماري في المملكة العربية السعودية', 'future-of-architectural-design-saudi', 'نظرة على التطورات الحديثة في التصميم المعماري وكيف تساهم في تحقيق رؤية 2030', 'محتوى المقال الكامل...', 'التصميم المعماري', '550e8400-e29b-41d4-a716-446655440001', 'published', NOW() - INTERVAL '5 days', 1250, 45, ARRAY['رؤية 2030', 'التصميم', 'المستقبل']),
('أهمية تقنية BIM في المشاريع الإنشائية الحديثة', 'importance-of-bim-technology', 'كيف تساعد تقنية نمذجة معلومات البناء في تحسين كفاءة المشاريع', 'محتوى المقال الكامل...', 'التقنيات الحديثة', '550e8400-e29b-41d4-a716-446655440002', 'published', NOW() - INTERVAL '10 days', 890, 32, ARRAY['BIM', 'تقنية', 'كفاءة']);

-- إدراج مواعيد نموذجية
INSERT INTO bookings (client_id, service_id, engineer_id, booking_date, booking_time, status, notes) VALUES
('550e8400-e29b-41d4-a716-446655440000', (SELECT id FROM services WHERE name = 'استشارة معمارية'), '550e8400-e29b-41d4-a716-446655440001', '2024-02-01', '10:00', 'confirmed', 'مناقشة مشروع فيلا جديدة'),
('550e8400-e29b-41d4-a716-446655440000', (SELECT id FROM services WHERE name = 'استشارة إنشائية'), '550e8400-e29b-41d4-a716-446655440003', '2024-02-02', '14:00', 'pending', 'استشارة حول مشروع مجمع تجاري');

-- إدراج استفسارات نموذجية
INSERT INTO inquiries (name, email, phone, company, service_type, project_type, budget_range, message, status) VALUES
('أحمد محمد السعيد', 'ahmed@example.com', '+966501234567', 'شركة الرياض للاستثمار', 'architectural', 'commercial', '1m-5m', 'نحتاج لتصميم مجمع تجاري في الرياض', 'new'),
('فاطمة عبدالله النعيمي', 'fatima@example.com', '+966501234568', '', 'consultation', 'residential', '500k-1m', 'أريد استشارة حول تصميم فيلا', 'in_progress');

-- إدراج تقييمات نموذجية
INSERT INTO reviews (project_id, client_id, rating, review_text, is_featured, is_approved) VALUES
((SELECT id FROM projects WHERE title = 'فيلا العائلة الملكية'), '550e8400-e29b-41d4-a716-446655440000', 5, 'خدمة ممتازة وتصميم رائع. تم تسليم المشروع في الوقت المحدد بجودة عالية.', true, true),
((SELECT id FROM projects WHERE title = 'مجمع الرياض التجاري'), '550e8400-e29b-41d4-a716-446655440000', 5, 'فريق محترف ومتعاون. إدارة المشروع كانت ممتازة.', true, true);
