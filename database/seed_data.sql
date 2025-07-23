-- Seed Data for AdsPro Application

-- Insert default categories
INSERT INTO public.categories (name, slug, description, icon, color) VALUES
('Technology', 'technology', 'Latest tech news and tutorials', '💻', '#3B82F6'),
('Design', 'design', 'UI/UX design tips and inspiration', '🎨', '#EF4444'),
('Business', 'business', 'Business strategies and insights', '💼', '#10B981'),
('Marketing', 'marketing', 'Digital marketing tips and trends', '📈', '#F59E0B'),
('Development', 'development', 'Programming tutorials and guides', '⚡', '#8B5CF6'),
('Productivity', 'productivity', 'Tools and tips for better productivity', '🚀', '#06B6D4'),
('Lifestyle', 'lifestyle', 'Personal development and lifestyle tips', '🌟', '#EC4899'),
('Finance', 'finance', 'Financial advice and investment tips', '💰', '#84CC16');

-- Insert default settings
INSERT INTO public.settings (key, value, description) VALUES
('site_title', '"AdsPro - Your Digital Hub"', 'Main site title'),
('site_description', '"Discover amazing content and connect with creators"', 'Site meta description'),
('posts_per_page', '12', 'Number of posts to show per page'),
('allow_comments', 'true', 'Whether to allow comments on posts'),
('require_comment_approval', 'false', 'Whether comments need approval before showing'),
('allow_registration', 'true', 'Whether new users can register'),
('maintenance_mode', 'false', 'Whether the site is in maintenance mode'),
('social_links', '{"twitter": "", "facebook": "", "instagram": "", "linkedin": ""}', 'Social media links'),
('theme_colors', '{"primary": "#3B82F6", "secondary": "#1F2937", "accent": "#F59E0B"}', 'Theme color scheme'),
('email_settings', '{"from_name": "AdsPro", "from_email": "noreply@adspro.com"}', 'Email configuration');

-- Insert sample posts (these will be created by users)
-- Note: These are just examples, actual posts will be created through the application

-- Create a function to sync user data from auth.users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email, full_name, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
        COALESCE(NEW.raw_user_meta_data->>'avatar_url', '')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create user profile
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update user profile
CREATE OR REPLACE FUNCTION public.handle_user_update()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.users
    SET 
        email = NEW.email,
        full_name = COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
        avatar_url = COALESCE(NEW.raw_user_meta_data->>'avatar_url', ''),
        updated_at = NOW()
    WHERE id = NEW.id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to update user profile when auth.users is updated
CREATE TRIGGER on_auth_user_updated
    AFTER UPDATE ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_user_update(); 