// App.tsx
import Table from './components/Table';
import { HeaderComponent } from './components/HeaderComponent';
import { RegistarFromComponent } from './components/RegistarFromComponent';
export const App = () => {
  return (
    <div className="p-4">
      {/* <HeaderComponent /> */}
      <HeaderComponent />
      {/* <Table /> */}
      <RegistarFromComponent />
    </div>
  );
}


