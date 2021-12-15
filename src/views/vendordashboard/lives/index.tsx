import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";

import {
    Wrapper,
    Container,
    Title,
    CustomButton,
} from "../../../components/pagedefault";

import {
    LivesContainer,
    ButtonContainer,
    LivesTableLabel,
    LivesTableContainer,
    LivesTable,
} from "./index.style";

export default function Lives() {
    const [scheduleData, setScheduleData] = useState<any>([]);

    useEffect(() => {
        setScheduleData([]);
    }, []);

    return (
        <LivesContainer>
            <Title>Lives</Title>
            <ButtonContainer>
                <Link className="ButtonLink" to="/liveschedule">
                    <CustomButton>AGENDAR LIVE</CustomButton>
                </Link>
                <Link to="/startlive" className="ButtonLink">
                    <CustomButton>INICIAR LIVE</CustomButton>
                </Link>
            </ButtonContainer>
            <LivesTableContainer>
                <LivesTableLabel>Lives Agendadas</LivesTableLabel>
                <LivesTable>
                    <div className="HeaderPart">
                        <div>Horário</div>
                        <div>Data</div>
                        <div>EDIT | CANCEL</div>
                    </div>
                    <div className="ContentPart">
                        {[...scheduleData].map((eachData, index) => (
                            <div key={index} className="row">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        ))}
                    </div>
                </LivesTable>
            </LivesTableContainer>

            <LivesTableContainer>
                <LivesTableLabel>Lives Gravadas</LivesTableLabel>
                <LivesTable>
                    <div className="HeaderPart">
                        <div>Horário</div>
                        <div>Data</div>
                        <div>EDIT | CANCEL</div>
                    </div>
                    <div className="ContentPart">
                        {[...scheduleData].map((eachData, index) => (
                            <div key={index} className="row">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        ))}
                    </div>
                </LivesTable>
            </LivesTableContainer>
        </LivesContainer>
    );
}
