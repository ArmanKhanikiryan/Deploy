import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import menu from "../../assets/icons/menu.png";
import List from '@mui/material/List';
import '../navbar/Navbar.css';
import './Menu.css';
import door from "../../assets/icons/door.png";
import window from "../../assets/icons/window.png";
import balcony from "../../assets/icons/balcony.png";
import slide from "../../assets/icons/sliding-door.png";
import logo from "../../assets/images/logo.png";
import {useNavigate} from "react-router";
import MenuAccordion from "./menuAccordion";
import LanguageSelector from "../languageSelector";
import {useTranslation} from "react-i18next";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Menu = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const navigate = useNavigate()
    const { t } = useTranslation()
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };
    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 275 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className='logo_menu_div'>
                <img className='logo_menu' onClick={() => navigate('/')} src={logo} alt="logo"/>
                </div>
                <div className='icons_wrapper_menu'>
                    <img className='header_icons_menu' src={door} alt="door"/>
                    <span> {t("Doors")} </span>
                </div>

                <div className='icons_wrapper_menu'>
                    <img className='header_icons_menu' src={window} alt="window"/>
                    <span> {t("Windows")} </span>
                </div>

                <div className='icons_wrapper_menu'>
                    <img className='header_icons_menu' src={balcony} alt="window"/>
                    <span>{t("Balcony")}</span>
                </div>

                <div className='icons_wrapper_menu'>
                    <img className='header_icons_menu' src={slide} alt="slide"/>
                    <span>{t("Slide")}</span>
                </div>
            </List>
            <List>
                    <MenuAccordion/>
            </List>
            <div className='language_selector_menu'>
                <LanguageSelector/>
            </div>

        </Box>
    );


    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <div onClick={toggleDrawer(anchor, true)} className='menu_dropdown'>
                        <span>{t("Menu")}</span>
                        <img className='menu_icon' src={menu} alt="menu"/>
                    </div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
export default Menu;