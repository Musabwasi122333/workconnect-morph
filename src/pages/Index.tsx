const Index = () => {
  console.log("Index component is rendering!");
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f0f0f0', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
          WorkConnect Platform
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          App is loading successfully!
        </p>
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <p>✅ React is working</p>
          <p>✅ Routing is working</p>
          <p>✅ Basic styling is working</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
