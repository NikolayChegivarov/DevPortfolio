import { useLocation } from 'react-router-dom';

export const useScrollToContact = () => {
    const location = useLocation();

    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        // Если мы на странице /projects, сначала переходим на главную
        if (location.pathname === '/projects') {
            window.location.href = '/#contact';
            return;
        }
        
        // Если мы на главной, скроллим к форме
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return scrollToContact;
};
