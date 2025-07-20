// Translations
const translations = {
    fr: {
        'page-title': 'Gestion des Prix de Livraison',
        'page-subtitle': 'Gérez vos tarifs de livraison par wilaya',
        'my-prices': 'Mes Prix',
        'add-group': 'Ajouter un Groupe',
        'duplicate': 'Dupliquer',
        'export': 'Exporter',
        'import': 'Importer',
        'saved': 'Sauvegardé',
        'search-wilaya': 'Rechercher une wilaya...',
        'show-free-only': 'Afficher uniquement les livraisons gratuites',
        'show-incomplete': 'Afficher les données incomplètes',
        'wilaya': 'Wilaya',
        'price': 'Prix (DZD)',
        'last-update': 'Dernière Mise à Jour',
        'status': 'Statut',
        'actions': 'Actions',
        'selected': 'sélectionnés',
        'bulk-update': 'Mise à Jour en Lot',
        'bulk-delete': 'Supprimer',
        'clear-selection': 'Effacer la Sélection',
        'total-wilayas': 'Total Wilayas',
        'average-price': 'Prix Moyen',
        'free-deliveries': 'Livraisons Gratuites',
        'max-price': 'Prix Maximum',
        'add-new-group': 'Ajouter un Nouveau Groupe de Prix',
        'group-name': 'Nom du Groupe:',
        'enter-group-name': 'Entrez le nom du groupe',
        'description': 'Description (optionnel):',
        'enter-description': 'Entrez une description',
        'copy-prices-from': 'Copier les prix depuis:',
        'start-from-scratch': 'Commencer à zéro',
        'copy-from-current': 'Copier du groupe actuel',
        'copy-from-other': 'Copier d\'un autre groupe',
        'select-group': 'Sélectionner un groupe',
        'cancel': 'Annuler',
        'create-group': 'Créer le Groupe',
        'bulk-update-prices': 'Mise à Jour en Lot des Prix',
        'update-type': 'Type de mise à jour:',
        'set-price': 'Définir le prix',
        'increase-by': 'Augmenter de',
        'decrease-by': 'Diminuer de',
        'percentage-change': 'Changement en pourcentage',
        'value': 'Valeur:',
        'apply': 'Appliquer',
        'keyboard-shortcuts': 'Raccourcis Clavier',
        'save': 'Sauvegarder',
        'new-group': 'Nouveau Groupe',
        'search': 'Rechercher',
        'help': 'Aide',
        'next-field': 'Champ Suivant',
        'dashboard': 'Tableau de bord',
        'settings': 'Paramètres',
        'logout': 'Déconnexion',
        'complete': 'Complet',
        'incomplete': 'Incomplet',
        'free': 'Gratuit',
        'edit': 'Modifier',
        'delete': 'Supprimer',
        'save-changes': 'Sauvegarder les modifications',
        'confirm-delete': 'Êtes-vous sûr de vouloir supprimer ce groupe?',
        'group-name-required': 'Le nom du groupe est requis',
        'group-name-exists': 'Ce nom de groupe existe déjà',
        'no-groups-selected': 'Aucun groupe sélectionné',
        'data-saved': 'Données sauvegardées avec succès',
        'error-saving': 'Erreur lors de la sauvegarde',
        'group-created': 'Groupe créé avec succès',
        'group-deleted': 'Groupe supprimé avec succès',
        'prices-updated': 'Prix mis à jour avec succès',
        'invalid-price': 'Prix invalide',
        'loading': 'Chargement...',
        'no-results': 'Aucun résultat trouvé'
    },
    en: {
        'page-title': 'Delivery Price Management',
        'page-subtitle': 'Manage your delivery rates by wilaya',
        'my-prices': 'My Prices',
        'add-group': 'Add Group',
        'duplicate': 'Duplicate',
        'export': 'Export',
        'import': 'Import',
        'saved': 'Saved',
        'search-wilaya': 'Search wilaya...',
        'show-free-only': 'Show only free deliveries',
        'show-incomplete': 'Show incomplete data',
        'wilaya': 'Wilaya',
        'price': 'Price (DZD)',
        'last-update': 'Last Update',
        'status': 'Status',
        'actions': 'Actions',
        'selected': 'selected',
        'bulk-update': 'Bulk Update',
        'bulk-delete': 'Delete',
        'clear-selection': 'Clear Selection',
        'total-wilayas': 'Total Wilayas',
        'average-price': 'Average Price',
        'free-deliveries': 'Free Deliveries',
        'max-price': 'Maximum Price',
        'add-new-group': 'Add New Price Group',
        'group-name': 'Group Name:',
        'enter-group-name': 'Enter group name',
        'description': 'Description (optional):',
        'enter-description': 'Enter description',
        'copy-prices-from': 'Copy prices from:',
        'start-from-scratch': 'Start from scratch',
        'copy-from-current': 'Copy from current group',
        'copy-from-other': 'Copy from another group',
        'select-group': 'Select a group',
        'cancel': 'Cancel',
        'create-group': 'Create Group',
        'bulk-update-prices': 'Bulk Update Prices',
        'update-type': 'Update type:',
        'set-price': 'Set price',
        'increase-by': 'Increase by',
        'decrease-by': 'Decrease by',
        'percentage-change': 'Percentage change',
        'value': 'Value:',
        'apply': 'Apply',
        'keyboard-shortcuts': 'Keyboard Shortcuts',
        'save': 'Save',
        'new-group': 'New Group',
        'search': 'Search',
        'help': 'Help',
        'next-field': 'Next Field',
        'dashboard': 'Dashboard',
        'settings': 'Settings',
        'logout': 'Logout',
        'complete': 'Complete',
        'incomplete': 'Incomplete',
        'free': 'Free',
        'edit': 'Edit',
        'delete': 'Delete',
        'save-changes': 'Save changes',
        'confirm-delete': 'Are you sure you want to delete this group?',
        'group-name-required': 'Group name is required',
        'group-name-exists': 'This group name already exists',
        'no-groups-selected': 'No groups selected',
        'data-saved': 'Data saved successfully',
        'error-saving': 'Error saving data',
        'group-created': 'Group created successfully',
        'group-deleted': 'Group deleted successfully',
        'prices-updated': 'Prices updated successfully',
        'invalid-price': 'Invalid price',
        'loading': 'Loading...',
        'no-results': 'No results found'
    }
};

// Global variables
let currentLanguage = 'fr';
let wilayas = [];
let priceGroups = [];
let currentGroupId = null;
let selectedRows = new Set();
let autoSaveInterval;

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    await loadWilayas();
    initializeLanguage();
    initializePriceGroups();
    setupEventListeners();
    setupKeyboardShortcuts();
    startAutoSave();
    renderPricingTable();
    updateStatistics();
});

// Load wilayas from JSON file
async function loadWilayas() {
    try {
        const response = await fetch('public/wilaya.json');
        const data = await response.json();
        wilayas = data.wilayas || [];
        console.log('Wilayas loaded:', wilayas.length);
    } catch (error) {
        console.error('Error loading wilayas:', error);
        // Fallback data if file not found
        wilayas = generateFallbackWilayas();
    }
}

// Generate fallback wilaya data
function generateFallbackWilayas() {
    // Real Algerian wilayas as fallback
    return [
        { id: 1, name_fr: "Adrar", name_en: "Adrar", code: "01" },
        { id: 2, name_fr: "Chlef", name_en: "Chlef", code: "02" },
        { id: 3, name_fr: "Laghouat", name_en: "Laghouat", code: "03" },
        { id: 4, name_fr: "Oum El Bouaghi", name_en: "Oum El Bouaghi", code: "04" },
        { id: 5, name_fr: "Batna", name_en: "Batna", code: "05" },
        { id: 6, name_fr: "Béjaïa", name_en: "Bejaia", code: "06" },
        { id: 7, name_fr: "Biskra", name_en: "Biskra", code: "07" },
        { id: 8, name_fr: "Béchar", name_en: "Bechar", code: "08" },
        { id: 9, name_fr: "Blida", name_en: "Blida", code: "09" },
        { id: 10, name_fr: "Bouira", name_en: "Bouira", code: "10" },
        { id: 11, name_fr: "Tamanrasset", name_en: "Tamanrasset", code: "11" },
        { id: 12, name_fr: "Tébessa", name_en: "Tebessa", code: "12" },
        { id: 13, name_fr: "Tlemcen", name_en: "Tlemcen", code: "13" },
        { id: 14, name_fr: "Tiaret", name_en: "Tiaret", code: "14" },
        { id: 15, name_fr: "Tizi Ouzou", name_en: "Tizi Ouzou", code: "15" },
        { id: 16, name_fr: "Alger", name_en: "Algiers", code: "16" },
        { id: 17, name_fr: "Djelfa", name_en: "Djelfa", code: "17" },
        { id: 18, name_fr: "Jijel", name_en: "Jijel", code: "18" },
        { id: 19, name_fr: "Sétif", name_en: "Setif", code: "19" },
        { id: 20, name_fr: "Saïda", name_en: "Saida", code: "20" },
        { id: 21, name_fr: "Skikda", name_en: "Skikda", code: "21" },
        { id: 22, name_fr: "Sidi Bel Abbès", name_en: "Sidi Bel Abbes", code: "22" },
        { id: 23, name_fr: "Annaba", name_en: "Annaba", code: "23" },
        { id: 24, name_fr: "Guelma", name_en: "Guelma", code: "24" },
        { id: 25, name_fr: "Constantine", name_en: "Constantine", code: "25" },
        { id: 26, name_fr: "Médéa", name_en: "Medea", code: "26" },
        { id: 27, name_fr: "Mostaganem", name_en: "Mostaganem", code: "27" },
        { id: 28, name_fr: "M'Sila", name_en: "M'Sila", code: "28" },
        { id: 29, name_fr: "Mascara", name_en: "Mascara", code: "29" },
        { id: 30, name_fr: "Ouargla", name_en: "Ouargla", code: "30" },
        { id: 31, name_fr: "Oran", name_en: "Oran", code: "31" },
        { id: 32, name_fr: "El Bayadh", name_en: "El Bayadh", code: "32" },
        { id: 33, name_fr: "Illizi", name_en: "Illizi", code: "33" },
        { id: 34, name_fr: "Bordj Bou Arréridj", name_en: "Bordj Bou Arreridj", code: "34" },
        { id: 35, name_fr: "Boumerdès", name_en: "Boumerdes", code: "35" },
        { id: 36, name_fr: "El Tarf", name_en: "El Tarf", code: "36" },
        { id: 37, name_fr: "Tindouf", name_en: "Tindouf", code: "37" },
        { id: 38, name_fr: "Tissemsilt", name_en: "Tissemsilt", code: "38" },
        { id: 39, name_fr: "El Oued", name_en: "El Oued", code: "39" },
        { id: 40, name_fr: "Khenchela", name_en: "Khenchela", code: "40" },
        { id: 41, name_fr: "Souk Ahras", name_en: "Souk Ahras", code: "41" },
        { id: 42, name_fr: "Tipaza", name_en: "Tipaza", code: "42" },
        { id: 43, name_fr: "Mila", name_en: "Mila", code: "43" },
        { id: 44, name_fr: "Aïn Defla", name_en: "Ain Defla", code: "44" },
        { id: 45, name_fr: "Naâma", name_en: "Naama", code: "45" },
        { id: 46, name_fr: "Aïn Témouchent", name_en: "Ain Temouchent", code: "46" },
        { id: 47, name_fr: "Ghardaïa", name_en: "Ghardaia", code: "47" },
        { id: 48, name_fr: "Relizane", name_en: "Relizane", code: "48" },
        { id: 49, name_fr: "Timimoun", name_en: "Timimoun", code: "49" },
        { id: 50, name_fr: "Bordj Badji Mokhtar", name_en: "Bordj Badji Mokhtar", code: "50" },
        { id: 51, name_fr: "Ouled Djellal", name_en: "Ouled Djellal", code: "51" },
        { id: 52, name_fr: "Béni Abbès", name_en: "Beni Abbes", code: "52" },
        { id: 53, name_fr: "In Salah", name_en: "In Salah", code: "53" },
        { id: 54, name_fr: "In Guezzam", name_en: "In Guezzam", code: "54" },
        { id: 55, name_fr: "Touggourt", name_en: "Touggourt", code: "55" },
        { id: 56, name_fr: "Djanet", name_en: "Djanet", code: "56" },
        { id: 57, name_fr: "El M'Ghair", name_en: "El M'Ghair", code: "57" },
        { id: 58, name_fr: "El Meniaa", name_en: "El Meniaa", code: "58" }
    ];
}

// Initialize language system
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    currentLanguage = savedLanguage;
    updateLanguageDisplay();
    translatePage();
}

// Initialize price groups
function initializePriceGroups() {
    const savedGroups = localStorage.getItem('priceGroups');
    if (savedGroups) {
        priceGroups = JSON.parse(savedGroups);
    } else {
        // Create default group
        priceGroups = [{
            id: 'default',
            name: currentLanguage === 'fr' ? 'Mes Prix' : 'My Prices',
            description: '',
            prices: {},
            createdAt: new Date().toISOString(),
            isDefault: true
        }];
        savePriceGroups();
    }
    
    currentGroupId = priceGroups[0].id;
    renderGroupTabs();
}

// Setup event listeners
function setupEventListeners() {
    // Language toggle
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    
    // User menu toggle
    document.getElementById('menuToggle').addEventListener('click', toggleUserMenu);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('dropdownMenu');
        const menuToggle = document.getElementById('menuToggle');
        
        if (!dropdown.contains(event.target) && !menuToggle.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
    
    // Add group button
    document.getElementById('addGroupBtn').addEventListener('click', showAddGroupModal);
    
    // Group actions
    document.getElementById('duplicateGroupBtn').addEventListener('click', duplicateCurrentGroup);
    document.getElementById('exportGroupBtn').addEventListener('click', exportCurrentGroup);
    document.getElementById('importGroupBtn').addEventListener('click', importGroup);
    
    // Search and filters
    document.getElementById('searchInput').addEventListener('input', filterTable);
    document.getElementById('showFreeOnly').addEventListener('change', filterTable);
    document.getElementById('showIncompleteOnly').addEventListener('change', filterTable);
    
    // Bulk actions
    document.getElementById('bulkUpdateBtn').addEventListener('click', showBulkUpdateModal);
    document.getElementById('bulkDeleteBtn').addEventListener('click', bulkDeletePrices);
    document.getElementById('clearSelectionBtn').addEventListener('click', clearSelection);
    
    // Modal events
    setupModalEvents();
}

// Setup modal events
function setupModalEvents() {
    // Add Group Modal
    document.getElementById('closeAddGroupModal').addEventListener('click', hideAddGroupModal);
    document.getElementById('cancelAddGroup').addEventListener('click', hideAddGroupModal);
    document.getElementById('confirmAddGroup').addEventListener('click', createNewGroup);
    
    // Bulk Update Modal
    document.getElementById('closeBulkUpdateModal').addEventListener('click', hideBulkUpdateModal);
    document.getElementById('cancelBulkUpdate').addEventListener('click', hideBulkUpdateModal);
    document.getElementById('confirmBulkUpdate').addEventListener('click', applyBulkUpdate);
    
    // Copy option change
    document.querySelectorAll('input[name="copyOption"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const sourceSelect = document.getElementById('sourceGroupSelect');
            if (this.value === 'other') {
                sourceSelect.style.display = 'block';
                populateSourceGroupSelect();
            } else {
                sourceSelect.style.display = 'none';
            }
        });
    });
    
    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === this) {
                this.classList.remove('show');
            }
        });
    });
}

// Setup keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        // Ctrl+S - Save
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            savePriceGroups();
            showNotification(translate('data-saved'), 'success');
        }
        
        // Ctrl+N - New Group
        if (event.ctrlKey && event.key === 'n') {
            event.preventDefault();
            showAddGroupModal();
        }
        
        // Ctrl+F - Focus search
        if (event.ctrlKey && event.key === 'f') {
            event.preventDefault();
            document.getElementById('searchInput').focus();
        }
        
        // F1 - Help
        if (event.key === 'F1') {
            event.preventDefault();
            toggleShortcutsHelp();
        }
        
        // Escape - Cancel/Close
        if (event.key === 'Escape') {
            hideAllModals();
            clearSelection();
            document.getElementById('shortcutsHelp').classList.remove('show');
        }
        
        // Ctrl+1-9 - Switch groups
        if (event.ctrlKey && event.key >= '1' && event.key <= '9') {
            event.preventDefault();
            const groupIndex = parseInt(event.key) - 1;
            if (groupIndex < priceGroups.length) {
                switchToGroup(priceGroups[groupIndex].id);
            }
        }
    });
}

// Language functions
function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    localStorage.setItem('selectedLanguage', currentLanguage);
    updateLanguageDisplay();
    translatePage();
    renderPricingTable();
    renderGroupTabs();
}

function updateLanguageDisplay() {
    const langText = document.getElementById('langText');
    langText.textContent = currentLanguage === 'fr' ? 'Français' : 'English';
}

function translatePage() {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = translate(key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-placeholder-key]').forEach(element => {
        const key = element.getAttribute('data-placeholder-key');
        const translation = translate(key);
        if (translation) {
            element.placeholder = translation;
        }
    });
}

function translate(key) {
    return translations[currentLanguage][key] || key;
}

// User menu functions
function toggleUserMenu() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('show');
}

// Group management functions
function renderGroupTabs() {
    const tabsContainer = document.getElementById('groupsTabs');
    tabsContainer.innerHTML = '';
    
    priceGroups.forEach(group => {
        const tab = document.createElement('div');
        tab.className = `tab ${group.id === currentGroupId ? 'active' : ''}`;
        tab.setAttribute('data-group', group.id);
        
        tab.innerHTML = `
            <span class="tab-name">${group.name}</span>
            <button class="tab-edit" title="${translate('edit')}" onclick="editGroupName('${group.id}')">
                <i class="fas fa-edit"></i>
            </button>
            ${!group.isDefault ? `<button class="tab-close" title="${translate('delete')}" onclick="deleteGroup('${group.id}')">
                <i class="fas fa-times"></i>
            </button>` : ''}
        `;
        
        tab.addEventListener('click', function(event) {
            if (!event.target.closest('.tab-edit') && !event.target.closest('.tab-close')) {
                switchToGroup(group.id);
            }
        });
        
        tabsContainer.appendChild(tab);
    });
}

function switchToGroup(groupId) {
    currentGroupId = groupId;
    renderGroupTabs();
    renderPricingTable();
    updateStatistics();
    clearSelection();
}

function showAddGroupModal() {
    document.getElementById('addGroupModal').classList.add('show');
    document.getElementById('groupNameInput').focus();
}

function hideAddGroupModal() {
    document.getElementById('addGroupModal').classList.remove('show');
    document.getElementById('groupNameInput').value = '';
    document.getElementById('groupDescriptionInput').value = '';
    document.querySelector('input[name="copyOption"][value="scratch"]').checked = true;
    document.getElementById('sourceGroupSelect').style.display = 'none';
}

function createNewGroup() {
    const nameInput = document.getElementById('groupNameInput');
    const descriptionInput = document.getElementById('groupDescriptionInput');
    const copyOption = document.querySelector('input[name="copyOption"]:checked').value;
    const sourceGroupSelect = document.getElementById('sourceGroupSelect');
    
    const name = nameInput.value.trim();
    if (!name) {
        showNotification(translate('group-name-required'), 'error');
        nameInput.focus();
        return;
    }
    
    // Check if name already exists
    if (priceGroups.some(group => group.name.toLowerCase() === name.toLowerCase())) {
        showNotification(translate('group-name-exists'), 'error');
        nameInput.focus();
        return;
    }
    
    const newGroup = {
        id: 'group_' + Date.now(),
        name: name,
        description: descriptionInput.value.trim(),
        prices: {},
        createdAt: new Date().toISOString(),
        isDefault: false
    };
    
    // Copy prices based on selected option
    if (copyOption === 'current') {
        const currentGroup = getCurrentGroup();
        newGroup.prices = { ...currentGroup.prices };
    } else if (copyOption === 'other') {
        const sourceGroupId = sourceGroupSelect.value;
        const sourceGroup = priceGroups.find(g => g.id === sourceGroupId);
        if (sourceGroup) {
            newGroup.prices = { ...sourceGroup.prices };
        }
    }
    
    priceGroups.push(newGroup);
    savePriceGroups();
    switchToGroup(newGroup.id);
    hideAddGroupModal();
    showNotification(translate('group-created'), 'success');
}

function editGroupName(groupId) {
    const group = priceGroups.find(g => g.id === groupId);
    if (!group) return;
    
    const newName = prompt(translate('group-name') + ':', group.name);
    if (newName && newName.trim() && newName.trim() !== group.name) {
        // Check if name already exists
        if (priceGroups.some(g => g.id !== groupId && g.name.toLowerCase() === newName.trim().toLowerCase())) {
            showNotification(translate('group-name-exists'), 'error');
            return;
        }
        
        group.name = newName.trim();
        savePriceGroups();
        renderGroupTabs();
        showNotification(translate('data-saved'), 'success');
    }
}

function deleteGroup(groupId) {
    if (priceGroups.length <= 1) {
        showNotification('Cannot delete the last group', 'error');
        return;
    }
    
    if (confirm(translate('confirm-delete'))) {
        priceGroups = priceGroups.filter(g => g.id !== groupId);
        
        if (currentGroupId === groupId) {
            currentGroupId = priceGroups[0].id;
        }
        
        savePriceGroups();
        renderGroupTabs();
        renderPricingTable();
        updateStatistics();
        showNotification(translate('group-deleted'), 'success');
    }
}

function duplicateCurrentGroup() {
    const currentGroup = getCurrentGroup();
    if (!currentGroup) return;
    
    const newName = currentGroup.name + ' (Copy)';
    let counter = 1;
    let finalName = newName;
    
    while (priceGroups.some(g => g.name === finalName)) {
        finalName = newName + ` ${counter}`;
        counter++;
    }
    
    const newGroup = {
        id: 'group_' + Date.now(),
        name: finalName,
        description: currentGroup.description,
        prices: { ...currentGroup.prices },
        createdAt: new Date().toISOString(),
        isDefault: false
    };
    
    priceGroups.push(newGroup);
    savePriceGroups();
    switchToGroup(newGroup.id);
    showNotification(translate('group-created'), 'success');
}

function exportCurrentGroup() {
    const currentGroup = getCurrentGroup();
    if (!currentGroup) return;
    
    const exportData = {
        group: currentGroup,
        wilayas: wilayas,
        exportDate: new Date().toISOString(),
        version: '1.0'
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentGroup.name.replace(/[^a-z0-9]/gi, '_')}_prices.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importGroup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const importData = JSON.parse(e.target.result);
                    if (importData.group && importData.group.prices) {
                        const group = importData.group;
                        group.id = 'group_' + Date.now();
                        group.createdAt = new Date().toISOString();
                        group.isDefault = false;
                        
                        // Ensure unique name
                        let baseName = group.name;
                        let counter = 1;
                        while (priceGroups.some(g => g.name === group.name)) {
                            group.name = `${baseName} (${counter})`;
                            counter++;
                        }
                        
                        priceGroups.push(group);
                        savePriceGroups();
                        switchToGroup(group.id);
                        showNotification(translate('group-created'), 'success');
                    } else {
                        showNotification('Invalid file format', 'error');
                    }
                } catch (error) {
                    showNotification('Error reading file', 'error');
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
}

function populateSourceGroupSelect() {
    const select = document.getElementById('sourceGroupSelect');
    select.innerHTML = `<option value="">${translate('select-group')}</option>`;
    
    priceGroups.forEach(group => {
        if (group.id !== currentGroupId) {
            const option = document.createElement('option');
            option.value = group.id;
            option.textContent = group.name;
            select.appendChild(option);
        }
    });
}

// Table functions
function renderPricingTable() {
    const tbody = document.getElementById('pricingTableBody');
    const currentGroup = getCurrentGroup();
    
    if (!currentGroup || !wilayas.length) {
        tbody.innerHTML = '<tr><td colspan="5">Loading...</td></tr>';
        return;
    }
    
    tbody.innerHTML = '';
    
    wilayas.forEach(wilaya => {
        const price = currentGroup.prices[wilaya.id] || '';
        const lastUpdate = price ? new Date().toLocaleDateString() : '';
        const status = getStatusForPrice(price);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <label class="checkbox-container">
                    <input type="checkbox" class="row-checkbox" data-wilaya-id="${wilaya.id}">
                    <span class="wilaya-name">${getWilayaName(wilaya)}</span>
                </label>
            </td>
            <td>
                <input type="number" 
                       class="price-input" 
                       value="${price}" 
                       min="0" 
                       step="0.01"
                       data-wilaya-id="${wilaya.id}"
                       placeholder="0.00">
            </td>
            <td class="last-update">${lastUpdate}</td>
            <td>
                <span class="status-badge status-${status.class}">${translate(status.text)}</span>
            </td>
            <td class="action-buttons">
                <button class="btn-icon" onclick="editPrice(${wilaya.id})" title="${translate('edit')}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon danger" onclick="deletePrice(${wilaya.id})" title="${translate('delete')}">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    // Add event listeners for price inputs
    document.querySelectorAll('.price-input').forEach(input => {
        input.addEventListener('change', function() {
            updatePrice(this.dataset.wilayaId, this.value);
        });
        
        input.addEventListener('blur', function() {
            updatePrice(this.dataset.wilayaId, this.value);
        });
    });
    
    // Add event listeners for checkboxes
    document.querySelectorAll('.row-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedRows.add(this.dataset.wilayaId);
            } else {
                selectedRows.delete(this.dataset.wilayaId);
            }
            updateBulkActionsVisibility();
        });
    });
    
    filterTable();
}

function getWilayaName(wilaya) {
    return currentLanguage === 'fr' ? wilaya.name_fr : wilaya.name_en;
}

function getStatusForPrice(price) {
    if (!price || price === '0' || price === 0) {
        return { class: 'free', text: 'free' };
    } else if (price && !isNaN(price) && parseFloat(price) > 0) {
        return { class: 'complete', text: 'complete' };
    } else {
        return { class: 'incomplete', text: 'incomplete' };
    }
}

function updatePrice(wilayaId, value) {
    const currentGroup = getCurrentGroup();
    if (!currentGroup) return;
    
    const numericValue = parseFloat(value);
    if (value === '' || value === null) {
        delete currentGroup.prices[wilayaId];
    } else if (!isNaN(numericValue) && numericValue >= 0) {
        currentGroup.prices[wilayaId] = numericValue;
    } else {
        showNotification(translate('invalid-price'), 'error');
        return;
    }
    
    savePriceGroups();
    updateStatistics();
    
    // Update the row status
    const row = document.querySelector(`input[data-wilaya-id="${wilayaId}"]`).closest('tr');
    const statusCell = row.querySelector('.status-badge');
    const lastUpdateCell = row.querySelector('.last-update');
    
    const status = getStatusForPrice(currentGroup.prices[wilayaId]);
    statusCell.className = `status-badge status-${status.class}`;
    statusCell.textContent = translate(status.text);
    lastUpdateCell.textContent = new Date().toLocaleDateString();
}

function editPrice(wilayaId) {
    const input = document.querySelector(`input[data-wilaya-id="${wilayaId}"]`);
    if (input) {
        input.focus();
        input.select();
    }
}

function deletePrice(wilayaId) {
    const currentGroup = getCurrentGroup();
    if (!currentGroup) return;
    
    delete currentGroup.prices[wilayaId];
    savePriceGroups();
    renderPricingTable();
    updateStatistics();
}

// Filter and search functions
function filterTable() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const showFreeOnly = document.getElementById('showFreeOnly').checked;
    const showIncompleteOnly = document.getElementById('showIncompleteOnly').checked;
    
    const rows = document.querySelectorAll('#pricingTableBody tr');
    
    rows.forEach(row => {
        const wilayaName = row.querySelector('.wilaya-name').textContent.toLowerCase();
        const priceInput = row.querySelector('.price-input');
        const price = parseFloat(priceInput.value) || 0;
        const isEmpty = !priceInput.value;
        
        let show = true;
        
        // Search filter
        if (searchTerm && !wilayaName.includes(searchTerm)) {
            show = false;
        }
        
        // Free delivery filter
        if (showFreeOnly && price !== 0) {
            show = false;
        }
        
        // Incomplete data filter
        if (showIncompleteOnly && !isEmpty && price > 0) {
            show = false;
        }
        
        row.style.display = show ? '' : 'none';
    });
}

// Bulk operations
function updateBulkActionsVisibility() {
    const bulkActions = document.getElementById('bulkActions');
    const selectedCount = document.getElementById('selectedCount');
    
    if (selectedRows.size > 0) {
        bulkActions.style.display = 'flex';
        selectedCount.textContent = selectedRows.size;
    } else {
        bulkActions.style.display = 'none';
    }
}

function showBulkUpdateModal() {
    if (selectedRows.size === 0) {
        showNotification(translate('no-groups-selected'), 'error');
        return;
    }
    
    document.getElementById('bulkUpdateModal').classList.add('show');
    document.getElementById('bulkUpdateValue').focus();
}

function hideBulkUpdateModal() {
    document.getElementById('bulkUpdateModal').classList.remove('show');
    document.getElementById('bulkUpdateValue').value = '';
    document.querySelector('input[name="updateType"][value="set"]').checked = true;
}

function applyBulkUpdate() {
    const updateType = document.querySelector('input[name="updateType"]:checked').value;
    const value = parseFloat(document.getElementById('bulkUpdateValue').value);
    
    if (isNaN(value) || value < 0) {
        showNotification(translate('invalid-price'), 'error');
        return;
    }
    
    const currentGroup = getCurrentGroup();
    if (!currentGroup) return;
    
    selectedRows.forEach(wilayaId => {
        const currentPrice = parseFloat(currentGroup.prices[wilayaId]) || 0;
        let newPrice;
        
        switch (updateType) {
            case 'set':
                newPrice = value;
                break;
            case 'increase':
                newPrice = currentPrice + value;
                break;
            case 'decrease':
                newPrice = Math.max(0, currentPrice - value);
                break;
            case 'percentage':
                newPrice = currentPrice * (1 + value / 100);
                break;
        }
        
        if (newPrice >= 0) {
            currentGroup.prices[wilayaId] = Math.round(newPrice * 100) / 100;
        }
    });
    
    savePriceGroups();
    renderPricingTable();
    updateStatistics();
    hideBulkUpdateModal();
    clearSelection();
    showNotification(translate('prices-updated'), 'success');
}

function bulkDeletePrices() {
    if (selectedRows.size === 0) {
        showNotification(translate('no-groups-selected'), 'error');
        return;
    }
    
    if (confirm(`Delete prices for ${selectedRows.size} wilayas?`)) {
        const currentGroup = getCurrentGroup();
        if (!currentGroup) return;
        
        selectedRows.forEach(wilayaId => {
            delete currentGroup.prices[wilayaId];
        });
        
        savePriceGroups();
        renderPricingTable();
        updateStatistics();
        clearSelection();
        showNotification(translate('prices-updated'), 'success');
    }
}

function clearSelection() {
    selectedRows.clear();
    document.querySelectorAll('.row-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });
    updateBulkActionsVisibility();
}

// Statistics functions
function updateStatistics() {
    const currentGroup = getCurrentGroup();
    if (!currentGroup) return;
    
    const prices = Object.values(currentGroup.prices).map(p => parseFloat(p)).filter(p => !isNaN(p));
    const totalWilayas = wilayas.length;
    const freeDeliveries = Object.values(currentGroup.prices).filter(p => !p || parseFloat(p) === 0).length;
    const averagePrice = prices.length > 0 ? Math.round(prices.reduce((a, b) => a + b, 0) / prices.length) : 0;
    const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
    
    document.getElementById('totalWilayas').textContent = totalWilayas;
    document.getElementById('averagePrice').textContent = averagePrice + ' DZD';
    document.getElementById('freeDeliveries').textContent = freeDeliveries;
    document.getElementById('maxPrice').textContent = maxPrice + ' DZD';
}

// Utility functions
function getCurrentGroup() {
    return priceGroups.find(g => g.id === currentGroupId);
}

function savePriceGroups() {
    localStorage.setItem('priceGroups', JSON.stringify(priceGroups));
    updateSaveStatus();
}

function updateSaveStatus() {
    const saveStatus = document.getElementById('saveStatus');
    saveStatus.style.opacity = '1';
    setTimeout(() => {
        saveStatus.style.opacity = '0.7';
    }, 2000);
}

function startAutoSave() {
    autoSaveInterval = setInterval(() => {
        savePriceGroups();
    }, 30000); // Auto-save every 30 seconds
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

function hideAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('show');
    });
}

function toggleShortcutsHelp() {
    const help = document.getElementById('shortcutsHelp');
    help.classList.toggle('show');
}

// Add notification styles dynamically
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        border-left: 4px solid #6366f1;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification.success {
        border-left-color: #10b981;
        color: #065f46;
    }
    
    .notification.error {
        border-left-color: #ef4444;
        color: #991b1b;
    }
    
    .notification i {
        font-size: 1.25rem;
    }
    
    .notification.success i {
        color: #10b981;
    }
    
    .notification.error i {
        color: #ef4444;
    }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);
