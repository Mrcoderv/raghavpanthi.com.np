export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <div className="inline-block bg-blue-purple-gradient h-1 w-24 rounded-full"></div>
        </div>
        <p className="text-muted-foreground">&copy; {currentYear} Raghav Vian Panthi. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

