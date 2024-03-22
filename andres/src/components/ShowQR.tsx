const ShowQR = () => {
    
    interface StudentQR {
        email: string;
        fname: string;
        lname: string;
        studentId: string;
    }
    const Student: StudentQR = {
        email: 'andres@andres.com',
        fname: 'Andres',
        lname: 'Parilli',
        studentId: '12345'
    }
  
    return (
      <div>
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${Student.email}&size=200x200`}
          alt={Student.fname}
          title={Student.fname}
        />
      </div>
    );
  };
  
  export default ShowQR;
  