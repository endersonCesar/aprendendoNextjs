import Link from 'next/link';

export default function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Página Inicial</Link>
                </li>
                <li>
                    <Link href="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link href="/contato">Contato</Link>
                </li>
                {/* Adicione mais itens do menu conforme necessário */}
            </ul>
        </nav>
    );
}