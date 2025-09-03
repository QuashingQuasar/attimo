export const IconDivider = () => {
  return (
    <div className="py-16 bg-cream/30 relative overflow-hidden">
      {/* Decorative Icons */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center space-x-12 opacity-20">
          {/* Wine Glass */}
          <div 
            className="w-8 h-8"
            style={{
              backgroundImage: `url('/lovable-uploads/e9586c63-eb11-40ee-93a0-3792c95e16c5.png')`,
              backgroundSize: '400px 400px',
              backgroundPosition: '-120px -280px',
              filter: 'hue-rotate(60deg) saturate(0.7)'
            }}
          />
          
          {/* Olive Branch */}
          <div 
            className="w-8 h-8"
            style={{
              backgroundImage: `url('/lovable-uploads/e9586c63-eb11-40ee-93a0-3792c95e16c5.png')`,
              backgroundSize: '400px 400px', 
              backgroundPosition: '-280px -240px',
              filter: 'hue-rotate(60deg) saturate(0.7)'
            }}
          />
          
          {/* Bottle */}
          <div 
            className="w-8 h-8"
            style={{
              backgroundImage: `url('/lovable-uploads/e9586c63-eb11-40ee-93a0-3792c95e16c5.png')`,
              backgroundSize: '400px 400px',
              backgroundPosition: '-280px -360px',
              filter: 'hue-rotate(60deg) saturate(0.7)'
            }}
          />
          
          {/* Grapes */}
          <div 
            className="w-8 h-8"
            style={{
              backgroundImage: `url('/lovable-uploads/e9586c63-eb11-40ee-93a0-3792c95e16c5.png')`,
              backgroundSize: '400px 400px',
              backgroundPosition: '-40px -520px',
              filter: 'hue-rotate(60deg) saturate(0.7)'
            }}
          />
        </div>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-8">
          <div className="h-px bg-olive-light/30 flex-1 max-w-xs"></div>
          <div className="mx-8 text-olive-medium/60 text-sm font-light">◦</div>
          <div className="h-px bg-olive-light/30 flex-1 max-w-xs"></div>
        </div>
      </div>
      
      {/* Floating Corner Accents */}
      <div 
        className="absolute top-4 left-4 w-16 h-16 opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/e9586c63-eb11-40ee-93a0-3792c95e16c5.png')`,
          backgroundSize: '400px 400px',
          backgroundPosition: '-200px -40px'
        }}
      />
      <div 
        className="absolute bottom-4 right-4 w-16 h-16 opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/e9586c63-eb11-40ee-93a0-3792c95e16c5.png')`,
          backgroundSize: '400px 400px',
          backgroundPosition: '-320px -160px'
        }}
      />
    </div>
  );
};