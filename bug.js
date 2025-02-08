```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is incorrect. It should be count + 1
    setCount(count++); // Bug: Incorrect update of state
  }, []);

  return <div>Count: {count}</div>;
}
```