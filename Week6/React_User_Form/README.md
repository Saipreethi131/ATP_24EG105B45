# React User Form

A client-side user registration application integrating robust form validation.

## Key Features
- **Form Validation Hook**: Utilizes `react-hook-form` to process verified First Name, Email, and DOB inputs, reporting real-time red error validation warnings if fields are invalid or empty.
- **Roster State Synchronization**: Accumulates submitted data blocks into a local React state array, automatically clearing form inputs upon success.
- **Dynamic Table Display**: Renders a custom table list of registered users below the form, displaying a friendly "No users added yet" indicator if the list is empty.

## Commands
- **Start Local Server**: `npm run dev`
- **Build Production Assets**: `npm run build`
