import React, {useState, useEffect} from "react";

import {
    Wrapper,
    Container,
    CustomButton,
    Title,
} from "../../../../components/pagedefault";

import {
    FormPart,
    SubPart,
    FormLabel,
    FormTextField,
    SubPartContainer,
    ButtonContainer,
    ButtonPart,
    Description,
    TableContainer,
    TableLabel,
    ScheduleTable,
    LiveScheduleContainer
} from "./index.style";

export default function LiveSchedule() {
    const [scheduleData, setScheduleData] = useState<any>([]);

    useEffect(() => {
        setScheduleData([]);
    }, []);

    return (
        <LiveScheduleContainer>
            <Title>Agendar Live</Title>
            <FormPart>
                <SubPart className="fullField">
                    <FormLabel>Título da Live</FormLabel>
                    <FormTextField></FormTextField>
                </SubPart>
                <SubPartContainer>
                    <SubPart className="halfField">
                        <FormLabel>Data</FormLabel>
                        <FormTextField></FormTextField>
                    </SubPart>
                    <SubPart className="halfField">
                        <FormLabel>Horário</FormLabel>
                        <FormTextField></FormTextField>
                    </SubPart>
                </SubPartContainer>
                <ButtonPart>
                    <ButtonContainer>
                        <CustomButton>AGENDAR LIVE</CustomButton>
                    </ButtonContainer>
                </ButtonPart>
            </FormPart>
            <Description>
                Inicie sua live em até 5 minutos depois do horário definido, caso não
                seja iniciada até a data e horário definido, a mesma será excluída
                automaticamente.
            </Description>
            <TableContainer>
                <Title>Lives</Title>
                <TableLabel>Lives Agendadas</TableLabel>
                <ScheduleTable>
                    <div className="HeaderSubpart">
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
                    </div>
                </ScheduleTable>
            </TableContainer>
        </LiveScheduleContainer>
    );
}
