import { http, HttpResponse, delay } from "msw";

export const handlers = [
  http.get("/api/users", async () => {
    await delay(1500);

    return HttpResponse.json({
      success: true,
      data: [
        {
          id: 1,
          name: "Kishan Jangid",
          email: "kishan@example.com",
          role: "Frontend Developer",
          department: "Engineering",
          location: "Jodhpur",
        },
        {
          id: 2,
          name: "Rahul Sharma",
          email: "rahul@example.com",
          role: "React Developer",
          department: "Engineering",
          location: "Jaipur",
        },
        {
          id: 3,
          name: "Priya Verma",
          email: "priya@example.com",
          role: "UI/UX Designer",
          department: "Design",
          location: "Hyderabad",
        },
      ],
    });
  }),
];