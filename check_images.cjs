
const fs = require('fs');
const path = require('path');

const events = JSON.parse(fs.readFileSync('src/data/events.json', 'utf8'));
const publicDir = 'public';

let missing = 0;
let total = 0;

events.forEach(event => {
    if (event.images) {
        event.images.forEach(imagePath => {
            total++;
            // Normalize path like in the frontend
            let normalized = imagePath.replace(/^(\.\/|public\/)/, "");
            if (normalized.startsWith("/")) normalized = normalized.substring(1);

            const fullPath = path.join(publicDir, normalized);
            if (!fs.existsSync(fullPath)) {
                console.log(`Missing: ${imagePath} -> ${fullPath}`);
                missing++;
            }
        });
    }
});

console.log(`Total: ${total}, Missing: ${missing}`);
