export const Footer = () => {
  return (
    <footer className="py-12 px-6" style={{ backgroundColor: '#1B4229' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#B3E58C' }}>
              ATTIMO
            </h3>
            <p className="leading-relaxed mb-4" style={{ 
              fontFamily: 'Space Grotesk, monospace',
              color: '#B3E58C'
            }}>
              High-polyphenol extra virgin olive oil, sourced directly from single groves and lab-tested for quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide" style={{ color: '#B3E58C' }}>
              Quick Links
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Space Grotesk, monospace' }}>
              <li>
                <a href="#product" className="hover:underline transition-colors" style={{ color: '#B3E58C' }}>
                  Product
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:underline transition-colors" style={{ color: '#B3E58C' }}>
                  Quality
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline transition-colors" style={{ color: '#B3E58C' }}>
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline transition-colors" style={{ color: '#B3E58C' }}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide" style={{ color: '#B3E58C' }}>
              Contact
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Space Grotesk, monospace', color: '#B3E58C' }}>
              <li>
                <a href="mailto:hello@attimo.com" className="hover:underline transition-colors">
                  hello@attimo.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6" style={{ borderColor: '#B3E58C' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ 
              fontFamily: 'Space Grotesk, monospace',
              color: '#B3E58C'
            }}>
              © 2024 ATTIMO. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm" style={{ fontFamily: 'Space Grotesk, monospace' }}>
              <a href="#" className="hover:underline transition-colors" style={{ color: '#B3E58C' }}>
                Privacy Policy
              </a>
              <a href="#" className="hover:underline transition-colors" style={{ color: '#B3E58C' }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};