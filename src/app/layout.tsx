import './globals.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../font-awesome/css/font-awesome.css'
import { Lora, Open_Sans } from 'next/font/google';
import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Next Blog',
  description: 'Generated by create next app',
}
const lora = Lora({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})
const openSans = Open_Sans({
  weight: ['300', '400', '600' ,'700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body>
          <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  Menu <i className="fa fa-bars"></i>
                </button>
                <Link className="navbar-brand" href="/">Start Bootstrap</Link>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link className="nav-link" href="/">Home</Link>
                  </li>
                  <li>
                    <Link className="nav-link" href="/about">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {children}
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                  <ul className="list-inline text-center">
                    <li>
                      <a href="#">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className="copyright text-muted">Copyright &copy; Your Website 2016</p>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </>
  )
}
