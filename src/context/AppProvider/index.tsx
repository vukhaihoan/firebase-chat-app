import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import useFirestore from "../../hooks/useFirestore";
import { AuthContext } from "../AuthProvider";

type roomobj = {
  rooms?: any[];
  isAddRoomvisible?: boolean;
  setIsAddRoomVisible?: Dispatch<SetStateAction<boolean>>;
  selectedRoomId?: string;
  setSelectedRoomId?: Dispatch<SetStateAction<string>>;
};

export const AppContext = createContext<roomobj>({});

export default function AppProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [isAddRoomvisible, setIsAddRoomVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const {
    user: { uid },
  } = useContext(AuthContext);

  const roomCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  const rooms: any[] = useFirestore("rooms", roomCondition);

  return (
    <AppContext.Provider
      value={{
        rooms,
        isAddRoomvisible,
        setIsAddRoomVisible,
        selectedRoomId,
        setSelectedRoomId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
