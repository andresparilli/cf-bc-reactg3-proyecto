import { useEffect, useState } from "react";

const useStudentsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("https://api.theuforyou.com/students/read.php");
        const fetchedData = await response.json();

        setData(fetchedData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return {
    students: data || [],
    isLoading,
    error,
  };
};

export default useStudentsData;
