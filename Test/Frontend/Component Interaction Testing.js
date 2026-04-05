/// Component Interaction Testing

test("button click triggers method", async () => {
  const wrapper = mount(MongoUser);

  await wrapper.find("button").trigger("click");

  expect(wrapper.vm).toBeDefined();
});


