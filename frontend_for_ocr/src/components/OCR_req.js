import React, { useState } from 'react';

const ExtractText = () => {
    const [text, setText] = useState('');

    const handleExtractText = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('apikey', 'K85177617188957');
            formData.append('file', e.target.image.files[0]);

            const response = await fetch('https://api.ocr.space/parse/image', {
                method: 'POST',
                body: formData
            });
            console.log(response)
            // const json = await response.json();
            // if(json === undefined){console.log("pop")}
            // setText(json.ParsedResults[0].ParsedText);
            // console.log(json.ParsedResults[0]);
            // console.log(json.ParsedResults[0].ParsedText);
            // console.log(json);
            // console.log(JSON.stringify(json));
            // console.log(JSON.stringify(json.ParsedResults[0].ParsedText), "Second");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleExtractText}>
                <input type="file" name="image" accept="image/*" required />
                <button type="submit">Extract Text</button>
            </form>
            <p>{text}</p>
        </div>
    );
};

export default ExtractText;
