import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About This Application</h1>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Inventory Management System</CardTitle>
            <CardDescription>A modern full-stack application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              This is a comprehensive inventory management system built with modern web technologies.
              It demonstrates responsive design, clean user interface, and efficient data management.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Frontend Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>React 19</strong> - UI library</li>
              <li><strong>TypeScript</strong> - Type safety</li>
              <li><strong>Vite</strong> - Build tool and dev server</li>
              <li><strong>React Router</strong> - Client-side routing</li>
              <li><strong>Tailwind CSS v4</strong> - Utility-first CSS framework</li>
              <li><strong>shadcn/ui</strong> - Beautiful UI components</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Backend Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Spring Boot</strong> - Java framework</li>
              <li><strong>PostgreSQL</strong> - Database (Neon)</li>
              <li><strong>JPA/Hibernate</strong> - ORM</li>
              <li><strong>JWT Authentication</strong> - Security</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Responsive design with mobile support</li>
              <li>Modern UI with animations and hover effects</li>
              <li>Product CRUD operations</li>
              <li>Category management</li>
              <li>Custom theme with CSS variables</li>
              <li>Type-safe development with TypeScript</li>
              <li>RESTful API integration</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
