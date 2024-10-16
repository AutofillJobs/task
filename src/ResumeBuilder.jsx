import React, { useState, useEffect } from 'react';
import { getTemplate } from "./templates/index";
import userData from './userData.json';

const ResumeBuilder = () => {
    const [selectedTemplateName, setSelectedTemplateName] = useState('azurill');

    const SelectedTemplate = getTemplate(selectedTemplateName);

    return (
        <div>
            <div className="mb-4">
                <label htmlFor="template-select" className="mr-2">
                    Select Template:
                </label>
                <select
                    id="template-select"
                    value={selectedTemplateName}
                    onChange={(e) => setSelectedTemplateName(e.target.value)}
                    className="border rounded p-1"
                >
                    <option value="azurill">Azurill</option>
                    <option value="bronzor">Bronzor</option>
                    <option value="chikorita">Chikorita</option>
                    <option value="ditto">Ditto</option>
                    <option value="gengar">Gengar</option>
                    <option value="glalie">Glalie</option>
                    <option value="kakuna">Kakuna</option>
                    <option value="leafish">Leafish</option>
                    <option value="nosepass">Nosepass</option>
                    <option value="onyx">Onyx</option>
                    <option value="pikachu">Pikachu</option>
                    <option value="rhyhorn">Rhyhorn</option>
                </select>
            </div>

            <div className="resume-preview">
                <SelectedTemplate data={userData} />
            </div>
        </div>
    );
};

export default ResumeBuilder;