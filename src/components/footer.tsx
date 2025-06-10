interface FooterProps {
  position?: 'fixed' | 'relative';
}

export default function Footer({ position = 'fixed' }: FooterProps) {
  return (
    <footer className={`bg-gray-100 shadow-sm w-full ${position === 'fixed' ? 'fixed bottom-0' : ''}`}>
      <p className="container mx-auto flex justify-center py-4">
        Created at
        <a className="ml-1 link" href="https://wotori.io" target="_blank">
          Wotori Studio
        </a>
      </p>
    </footer>
  );
}
