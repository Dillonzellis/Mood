const createURL = (path: string) => {
  return window.location.origin + path;
};

export const updateEntry = async (id, content) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ content }),
    }),
  );

  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return data.data;
  }
};

// export const updateEntry = async (id, updates) => {
//   const res = await fetch(
//     new Request(createURL(`/api/entry/${id}`), {
//       method: "PATCH",
//       body: JSON.stringify({ updates }),
//     }),
//   );
//
//   if (res.ok) {
//     return res.json();
//   } else {
//     throw new Error("Something went wrong on API server!");
//   }
// };

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL("/api/journal"), {
      method: "POST",
    }),
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
