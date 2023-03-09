import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import '../../menu/menuAccordion/MenuAccorion.css'
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

const NavbarAccordion = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handelMouseEnter = () => {
            setExpanded('panel1')
    }
    const handleMouseLeave = () => {
        setExpanded(false)
    }

    const { t } = useTranslation()


    return (
        <div>

            <Accordion className='accordion_element' sx={{whiteSpace: 'nowrap',position: 'absolute', right: '150px',top: "15px", borderRadius: '5px'}} expanded={expanded === 'panel1'} onMouseLeave={handleMouseLeave} onMouseEnter={handelMouseEnter}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{t('Contact Info')}</Typography>
                </AccordionSummary>
                <AccordionDetails style={{cursor: 'auto'}} className='accordion_inner_element'>
                    <span>+37491374520</span>
                </AccordionDetails>
                <AccordionDetails style={{cursor: 'auto'}} className='accordion_inner_element'>
                    <span>+37495778844</span>
                </AccordionDetails>
                <AccordionDetails style={{cursor: 'auto'}} className='accordion_inner_element'>
                    <span>info.proffsystem@gmail.com</span>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default NavbarAccordion;