import React, { useState } from 'react';

const ExtractText = () => {
    const [text, setText] = useState('');

    const handleExtractText = async (e) => {
        console.log("CLICKED")
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('apikey', 'K85177617188957');
            formData.append("isOverlayRequired", true);
            // formData.append("TextOverlay", true);
            formData.append('file', e.target.image.files[0]);
            formData.append('OCREngine', 5);
            // formData.append('OCREngine', 2);
            // OCREngine=2

            const response = await fetch('https://api.ocr.space/parse/image', {
                method: 'POST',
                body: formData
            });
            // console.log(response)
            const json = await response.json();
            // console.log(json)
            // console.log(json.ParsedResults);
            // console.log(json.ParsedResults[0].TextOverlay.Lines);
            // console.log(json.ParsedResults[0].TextOverlay.Lines)
            const pan = json.ParsedResults[0].TextOverlay.Lines
            // console.log(pan)
            pan.forEach((key) =>{
                const k1 = key.Words
                // console.log(key.LineText)
                // k1.forEach((k3) => console.log(k3))
                k1.forEach((k3) => console.log(k3.WordText," ", k3.Left," ", k3.Top))

            } 
            )
            // const keys = Object.keys(json.ParsedResults[0].TextOverlay);
            // (pan).forEach((key) => {
            //     const tan = key.words
            //     (tan).forEach((key1) => console.log(`${key1.WordText}`,`${key1.Left}`, `${key1.Top}`));
            //     // console.log(`${key.words.forEach}`);
            // });
            // console.log(response)
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
