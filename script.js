const tabs = Array.from(document.querySelectorAll('.tab'));
const topics = Array.from(document.querySelectorAll('.topic'));
const searchInput = document.querySelector('#search');

function visibleByCategory(topic, category) {
  return topic.dataset.category === category;
}

function filterTopics() {
  const activeTab = document.querySelector('.tab.active');
  const category = activeTab?.dataset.target;
  const query = searchInput.value.trim().toLowerCase();

  topics.forEach((topic) => {
    const matchesCategory = visibleByCategory(topic, category);
    const matchesSearch = topic.textContent.toLowerCase().includes(query);
    topic.classList.toggle('hidden', !(matchesCategory && matchesSearch));
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((node) => node.classList.remove('active'));
    tab.classList.add('active');
    filterTopics();
  });
});

searchInput.addEventListener('input', filterTopics);

filterTopics();
