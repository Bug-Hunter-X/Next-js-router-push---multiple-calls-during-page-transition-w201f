```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause an error if the page is already loading
    router.push('/another-page');
    router.push('/yet-another-page');
  };

  return (
    <button onClick={handleClick}>Go to another page</button>
  );
}

export default MyComponent;
```