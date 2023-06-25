export default async function handler(req: any, res: any) {
  res.status(200).json([
      {
        "id": "01",
        "title": "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        "content": "",
        "author": "Player B",
        "date": "25/06/2023",
        "subtitle": ""
      },
      {
        "id": "02",
        "title": "Science has not yet mastered prophecy",
        "content": "",
        "author": "Player A",
        "date": "25/06/2023",
        "subtitle": "We predict too much for the next year and yet far too little for the next ten."
      },
      {
        "id": "03",
        "title": "Failure is not an option",
        "content": "",
        "author": "Player C",
        "date": "25/06/2023",
        "subtitle": "Many say exploration is part of our destiny, but it’s actually our duty to future generations."
      }
    ]
  );
}
export async function getPosts(host: string) {
  const res = await fetch(`http://${host}/api/posts`, {
    method: 'GET'
  });
  return res.json();
}
