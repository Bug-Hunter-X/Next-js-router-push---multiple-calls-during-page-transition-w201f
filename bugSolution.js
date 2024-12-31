```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    const handleRouteChangeComplete = (url) => {
      if (url === '/another-page') {
        router.push('/yet-another-page');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    router.push('/another-page');
  };

  return (
    <button onClick={handleClick}>Go to another page</button>
  );
}

export default MyComponent;
```