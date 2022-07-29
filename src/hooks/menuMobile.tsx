import {createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from 'react'

interface MenuAsideProviderProps {
    children: any;
}

interface ActiveItemProps {
    path: string,
    subpath?: boolean
}

interface MenuAsideContextData {
    switchMenuAside: () => void,
    openMenu: boolean,
    setOpenMenu: Dispatch<SetStateAction<boolean>>,
    setActiveItem: Dispatch<SetStateAction<ActiveItemProps>>,
    activeItem: ActiveItemProps,
    
}

export const MenuAsideContext = createContext(({} as MenuAsideContextData));

function MenuAsideProvider({children}: MenuAsideProviderProps) {
    
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [activeItem, setActiveItem] = useState<ActiveItemProps>({path: '/home'})

    function switchMenuAside() {
        setOpenMenu(!openMenu)
    }


    return (
        <div>
            <MenuAsideContext.Provider
                value={{
                    switchMenuAside,
                    openMenu,
                    setOpenMenu,
                    activeItem,
                    setActiveItem
                }}
            >
                {children}
            </MenuAsideContext.Provider>
        </div>
    )
}

function useAsideBar() {
    return useContext(MenuAsideContext)
}

export {MenuAsideProvider, useAsideBar}