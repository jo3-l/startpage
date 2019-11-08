// eslint-disable-next-line no-unused-vars
import DockItem from '../components/DockItem.vue';
import { dock } from '../../config';
export default {
    name: 'Dock',
    data() {
        return { 
            dock_items: Object.entries(dock),
            maxSize: (Object.entries(dock).length * 118 + 20) * 2,
            windowWidth: window.innerWidth,
            not_hidden: true,
        };
    },
    components: {
      DockItem,
    },
    watch: {
      windowWidth(newWidth) {
        if (newWidth < this.maxSize) this.not_hidden = false;
        else this.not_hidden = true;
      }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth;
      });
    });
  }
}