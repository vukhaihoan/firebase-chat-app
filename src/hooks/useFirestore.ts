import { useEffect, useState } from "react";
import { db } from "../firebase/config";

interface Condition {
  compareValue: string;
  operator: any;
  fieldName: string;
}

const useFirestore = (collection: string, condition: Condition) => {
  const [documents, setDocuments] = useState<any[]>([]);
  useEffect(() => {
    let collectionRef = db.collection(collection).orderBy("createAt");
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }
    const unsubcribe = collectionRef.onSnapshot((snapshot) => {
      const documents: any[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocuments(documents);
    });
    return unsubcribe;
  }, [collection, condition]);
  return documents;
};

export default useFirestore;
