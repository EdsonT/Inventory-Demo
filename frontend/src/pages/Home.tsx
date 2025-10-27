import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Inventory Management</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Manage your products efficiently with a modern interface
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/products">
            <Button size="lg">View Products</Button>
          </Link>
          <Link to="/add-product">
            <Button size="lg" variant="outline">Add New Product</Button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Easy Management</CardTitle>
            <CardDescription>
              Simple interface to manage your inventory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Add, view, and manage products with an intuitive user interface.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Modern Stack</CardTitle>
            <CardDescription>
              Built with the latest technologies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              React, TypeScript, Tailwind CSS, shadcn/ui, and Spring Boot backend.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Responsive Design</CardTitle>
            <CardDescription>
              Works seamlessly on all devices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Fully responsive interface with smooth animations and modern UI components.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
