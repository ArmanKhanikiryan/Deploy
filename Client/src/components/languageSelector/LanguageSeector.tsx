import Russia from '../../assets/flags/russia.png'
import UnitedKingdom from '../../assets/flags/UK.png'
import Armenia from '../../assets/flags/armenia.png'
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from '@mui/material/Select';
import {useTranslation} from "react-i18next";






const countries = [
    {
        label: "English",
        src: UnitedKingdom,
        link: " ",
        value: "en"
    },
    {
        label: "Armenian",
        src: Armenia,
        link: " ",
        value: "hy"
    },
    {
        label: "Russian",
        src: Russia,
        link: " ",
        value: "ru"
    }
];

const LanguageSelector = () => {

    const [country, setCountry] = React.useState(UnitedKingdom);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setCountry(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const { t, i18n } = useTranslation()

    return (
        <form style={{margin: ' 10px 5px 0 10px' }} autoComplete="off">
            <FormControl >
                <InputLabel htmlFor="open-select" />
                <Select
                    sx={{border: "none"}}
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={country}
                    name="country"
                    onChange={handleChange}
                    inputProps={{
                        id: "open-select"
                    }}
                >
                    {countries.map((option, key) => (
                        <MenuItem onClick={() => i18n.changeLanguage(option.value)} value={option.src} key={key}>
                            <img src={option.src}  alt={option.label} width='25px' />{" "}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    );
}

export default LanguageSelector;