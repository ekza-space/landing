interface FooterProps {
  position?: 'fixed' | 'relative';
}

export default function Footer({ position = 'fixed' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-100 shadow-sm w-full ${position === 'fixed' ? 'fixed bottom-0' : ''}`}>
      <div className="container mx-auto flex flex-col items-center py-4 text-gray-600">
        <p>© {currentYear} Ekza Space</p>
        <p className="mt-1">
          Created at
          <a className="ml-1 link" href="https://wotori.io" target="_blank" rel="noopener noreferrer">
            Wotori Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
