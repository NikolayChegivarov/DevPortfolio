import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Переход к форме обратной связи
    const goToContact = () => {
        // Если мы на странице проектов
        if (location.pathname === '/projects') {
            // Сначала переходим на главную
            navigate('/');
            // Ждем рендеринга и скроллим к форме
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 200);
            return;
        }

        // Если мы на главной
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Переход к проектам
    const goToProjects = () => {
        // Если мы на главной
        if (location.pathname === '/') {
            navigate('/projects');
            // Скроллим наверх страницы проектов
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
            return;
        }

        // Если мы уже на странице проектов - скролл вверх
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Переход на главную (наверх)
    const goToHome = () => {
        if (location.pathname === '/projects') {
            navigate('/');
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return { goToContact, goToProjects, goToHome };
};
