import React from 'react';
import {AddCircle} from "@mui/icons-material";

interface AppHeaderProps {
  onShowForm: () => void
}

const AppHeader: React.FC<AppHeaderProps> = ({onShowForm}) => {
  return (
      <div>
        <div onClick={onShowForm}><AddCircle/></div>
      </div>
  );
};

export default AppHeader;