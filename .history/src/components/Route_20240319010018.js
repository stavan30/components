import  { useContext } from 'react'
import NavigationContext from '../context/navigation'
import useNavigation from '../hooks/use-navigation';

const Route = ({path, children}) => {
    const { currentPath } = useNavigation();
    
    if(path === currentPath){
        return children;
    }
  
    return null;
}

export default Route