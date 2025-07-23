-- Row Level Security (RLS) Policies for AdsPro Application

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.follows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view all users" ON public.users
    FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.users
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Categories policies (public read, admin write)
CREATE POLICY "Anyone can view categories" ON public.categories
    FOR SELECT USING (true);

CREATE POLICY "Only admins can manage categories" ON public.categories
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND is_premium = true
        )
    );

-- Posts policies
CREATE POLICY "Anyone can view published posts" ON public.posts
    FOR SELECT USING (
        status = 'published' OR 
        auth.uid() = author_id OR
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND is_premium = true
        )
    );

CREATE POLICY "Authors can manage their own posts" ON public.posts
    FOR ALL USING (auth.uid() = author_id);

CREATE POLICY "Admins can manage all posts" ON public.posts
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND is_premium = true
        )
    );

-- Comments policies
CREATE POLICY "Anyone can view approved comments" ON public.comments
    FOR SELECT USING (
        is_approved = true OR 
        auth.uid() = author_id OR
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND is_premium = true
        )
    );

CREATE POLICY "Users can create comments" ON public.comments
    FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update their own comments" ON public.comments
    FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Users can delete their own comments" ON public.comments
    FOR DELETE USING (auth.uid() = author_id);

CREATE POLICY "Admins can manage all comments" ON public.comments
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND is_premium = true
        )
    );

-- Likes policies
CREATE POLICY "Anyone can view likes" ON public.likes
    FOR SELECT USING (true);

CREATE POLICY "Users can manage their own likes" ON public.likes
    FOR ALL USING (auth.uid() = user_id);

-- Bookmarks policies
CREATE POLICY "Users can view their own bookmarks" ON public.bookmarks
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own bookmarks" ON public.bookmarks
    FOR ALL USING (auth.uid() = user_id);

-- Follows policies
CREATE POLICY "Anyone can view follows" ON public.follows
    FOR SELECT USING (true);

CREATE POLICY "Users can manage their own follows" ON public.follows
    FOR ALL USING (auth.uid() = follower_id);

-- Notifications policies
CREATE POLICY "Users can view their own notifications" ON public.notifications
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own notifications" ON public.notifications
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "System can create notifications" ON public.notifications
    FOR INSERT WITH CHECK (true);

-- Settings policies (admin only)
CREATE POLICY "Admins can view settings" ON public.settings
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND is_premium = true
        )
    );

CREATE POLICY "Admins can manage settings" ON public.settings
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND is_premium = true
        )
    ); 