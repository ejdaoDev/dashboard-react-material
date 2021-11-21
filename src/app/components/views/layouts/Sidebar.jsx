import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import TimelineIcon from '@mui/icons-material/Timeline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Divider from "@mui/material/Divider";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Sidebar() {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <List>
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}><div id="sidebar-title" className="d-none" style={{ textAlign: "center", padding: "10px" }} ><img style={{ height: "30px" }} src="assets/images/logo.png" /> Credito Facil</div></Link>
            <Divider />
            <Link to="/security/users" style={{ textDecoration: "none", color: "black" }}>
                <ListItem button key="Inbox">
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Usuarios" />
                </ListItem>
            </Link>
            <Accordion expanded={expanded === 'pn1'} onChange={handleChange('pn1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>
                        <AccountBalanceIcon /></Typography><label id="pn1-title" className="d-none">Prestamo</label>
                </AccordionSummary>
                <Link to="/balance" style={{ textDecoration: "none", color: "black" }}>
                    <ListItem button key="Inbox">
                        <ListItemIcon>
                            <AccountBalanceWalletIcon />
                        </ListItemIcon>
                        <ListItemText primary="Saldo" />
                    </ListItem>
                </Link>
                <Link to="/loans" style={{ textDecoration: "none", color: "black" }}>
                    <ListItem button key="Inbox">
                        <ListItemIcon>
                            <CreditCardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Prestamos" />
                    </ListItem>
                </Link>
                <Link to="/record" style={{ textDecoration: "none", color: "black" }}>
                    <ListItem button key="Inbox">
                        <ListItemIcon>
                            <TimelineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Historial" />
                    </ListItem>
                </Link>
            </Accordion>
        </List>
    );
}