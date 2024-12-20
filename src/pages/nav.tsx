import Link from 'next/link'
import { Button } from '../components/ui/button'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="flex justify-end px-10 items-center gap-8 py-4">
          <Link href="/projects" className="text-sm hover:text-neutral-600">
            Projects
          </Link>
          <Link href="/about" className="text-sm hover:text-neutral-600">
            About
          </Link>
          <Link href="/assets" className="text-sm hover:text-neutral-600">
            Digital Assets
          </Link>
          <Button variant="default" className="bg-neutral-900 text-white hover:bg-neutral-800">
            Contact me!
          </Button>
        </div>
    </nav>
  )
}

