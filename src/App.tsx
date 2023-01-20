import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <Label htmlFor={'name'}>
                    Name
                    <Input id={'name'} name={'name'} />
                </Label>
                <Label htmlFor={'email'}>
                    Email
                    <Input id={'email'} name={'email'} />
                </Label>
                <Label htmlFor="message">
                    Message
                    <Input id={'message'} name={'message'} />
                </Label>
            </form>
            <SubmitButton />
        </div>
    );
}

export default App;
