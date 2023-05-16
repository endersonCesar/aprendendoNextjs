import Menu from './menu';

export default function Layout({ children }) {
    return (
        <div>
            <Menu />
            <main>{children}</main>
            {/* Outros componentes ou conteúdo adicional */}
        </div>
    );
}