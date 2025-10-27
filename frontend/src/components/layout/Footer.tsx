export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Inventory Manager</h3>
            <p className="text-sm text-muted-foreground">
              A modern inventory management system built with React and Spring Boot.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/add-product" className="text-muted-foreground hover:text-foreground transition-colors">
                  Add Product
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Technologies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>React 19 + TypeScript</li>
              <li>Tailwind CSS v4</li>
              <li>shadcn/ui</li>
              <li>Spring Boot</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Inventory Manager. Built with React and Spring Boot.</p>
        </div>
      </div>
    </footer>
  );
}
