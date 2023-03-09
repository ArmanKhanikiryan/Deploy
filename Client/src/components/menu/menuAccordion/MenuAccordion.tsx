import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './MenuAccorion.css';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const MenuAccordion = () => {

    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <div>
            <Accordion className='accordion_element' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{t("Products")}</Typography>
                </AccordionSummary>
                <AccordionDetails onClick={() => navigate('/products/1p')} className='accordion_inner_element'>
                    <span>1 {t("Products")}</span>
                </AccordionDetails>
                <AccordionDetails onClick={() => navigate('/products/2p')} className='accordion_inner_element'>
                    <span>2 {t("Products")}</span>
                </AccordionDetails>
                <AccordionDetails onClick={() => navigate('/products/3p')} className='accordion_inner_element'>
                    <span>3 {t("Products")}</span>
                </AccordionDetails>
            </Accordion>

            <Accordion className='accordion_element' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{t("Service")}</Typography>
                </AccordionSummary>
                <AccordionDetails onClick={() => navigate('/service/1s')} className='accordion_inner_element'>
                    <span>1 {t("Service")}</span>
                </AccordionDetails>
                <AccordionDetails onClick={() => navigate('/service/2s')} className='accordion_inner_element'>
                    <span>2 {t("Service")}</span>
                </AccordionDetails>
                <AccordionDetails onClick={() => navigate('/service/3s')} className='accordion_inner_element'>
                    <span>3 {t("Service")}</span>
                </AccordionDetails>
            </Accordion>
            <Typography onClick={() => navigate('/about-us')} style={{fontSize: '16px'}} className='about_us_button_menu' variant="h6">{t('About Us')}</Typography>
        </div>
    );
}

export default MenuAccordion;