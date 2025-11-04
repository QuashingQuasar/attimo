import attimoLogo from '@/assets/attimo-footer-logo.svg';

export const Footer = () => {
  return <footer className="py-12 px-6" style={{
    backgroundColor: '#1B4229'
  }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <img src={attimoLogo} alt="ATTIMO" className="h-16 mb-4" />
            <p className="leading-relaxed mb-4" style={{
            fontFamily: 'Space Grotesk, monospace',
            color: '#B3E58C'
          }}>
              High-polyphenol extra virgin olive oil, sourced directly from small family groves and lab-tested for quality.
            </p>
          </div>

          {/* Empty spacer for grid alignment */}
          <div className="hidden md:block"></div>

          {/* Social */}
          <div className="flex justify-start md:justify-end">
            <a href="https://www.instagram.com/attimo.oil" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B3E58C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6" style={{
        borderColor: '#B3E58C'
      }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{
            fontFamily: 'Space Grotesk, monospace',
            color: '#B3E58C'
          }}>© 2025 ATTIMO. All rights reserved.</p>
            <div className="flex gap-6 text-sm" style={{
            fontFamily: 'Space Grotesk, monospace'
          }}>
              <a href="#" className="hover:underline transition-colors" style={{
              color: '#B3E58C'
            }}>
                Privacy Policy
              </a>
              <a href="#" className="hover:underline transition-colors" style={{
              color: '#B3E58C'
            }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};