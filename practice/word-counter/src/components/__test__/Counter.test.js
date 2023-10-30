import {getByPlaceholderText, render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../Counter';


describe('Counter Component Test',()=>{
    it('render the textarea',()=>{
        // const {getByTestId}   = render(<Counter/>)
        const {getByPlaceholderText}   = render(<Counter/>)
        // const textArea = getByTestId("textArea");
        const textArea = getByPlaceholderText('Type or paste your text');
    
        expect(textArea).toBeTruthy();
       
    });
    
    it('render the result',()=>{
        const {getByTestId } = render(<Counter/>);
    
        const charLength = getByTestId('charLength');
    
        // expect(charLength.innerHTML).toBeTruthy();
        expect(charLength.innerHTML).toBe("Character: 0");
    });

    it("render the word result", () => {
        render(<Counter />);
        const wordLength = screen.getByText("Word: 0");
        expect(wordLength).toBeInTheDocument();
    });
})
// test('render the textarea',()=>{
//     // const {getByTestId}   = render(<Counter/>)
//     const {getByPlaceholderText}   = render(<Counter/>)
//     // const textArea = getByTestId("textArea");
//     const textArea = getByPlaceholderText('Type or paste your text');

//     expect(textArea).toBeTruthy();
   
// });

// test('render the result',()=>{
//     const {getByTestId } = render(<Counter/>);

//     const charLength = getByTestId('charLength');

//     // expect(charLength.innerHTML).toBeTruthy();
//     expect(charLength.innerHTML).toBe("Character: 0");
// });